import { Controller, Get, Param } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('api/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getAllPokemon() {
    return this.pokemonService.getFirst100Pokemon();
  }

  @Get(':id')
  getPokemonById(@Param('id') id: number) {
    return this.pokemonService.getPokemonById(id);
  }

  @Get('pokemonAndTypes/:id')
  getPokemonAndTypes(@Param('id') id: number) {
    return this.pokemonService.getPokemonWithTranslations(id);
  }
}
