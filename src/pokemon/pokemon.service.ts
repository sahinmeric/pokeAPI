import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  getFirst100Pokemon() {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon?limit=100')
      .pipe(map((response) => response.data.results));
  }

  getPokemonById(id: number) {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      map((response) => ({
        name: response.data.name,
        types: response.data.types.map((typeInfo) => ({
          slot: typeInfo.slot,
          type: {
            name: typeInfo.type.name,
            url: typeInfo.type.url,
          },
        })),
      })),
    );
  }

  getPokemonWithTranslations(id: number): Observable<any> {
    return this.httpService.get(`https://pokeapi.co/api/v2/pokemon/${id}`).pipe(
      switchMap((response) => {
        const pokemon = response.data;
        const typeRequests = pokemon.types.map((typeInfo) =>
          this.httpService.get(typeInfo.type.url).pipe(
            map((typeResponse) => ({
              name: typeInfo.type.name,
              translations: typeResponse.data.names
                .filter(
                  (translation) =>
                    translation.language.name === 'es' ||
                    translation.language.name === 'ja',
                )
                .map((translation) => ({
                  language: translation.language.name,
                  name: translation.name,
                })),
            })),
          ),
        );
        return forkJoin(typeRequests).pipe(
          map((types) => ({
            name: pokemon.name,
            types,
          })),
        );
      }),
    );
  }
}
