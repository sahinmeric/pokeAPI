import { Test, TestingModule } from '@nestjs/testing';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { of } from 'rxjs';

describe('PokemonController', () => {
  let controller: PokemonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonController],
      providers: [
        {
          provide: PokemonService,
          useValue: {
            getFirst100Pokemon: jest
              .fn()
              .mockReturnValue(of([{ name: 'bulbasaur', url: '...' }])),
            getPokemonById: jest
              .fn()
              .mockReturnValue(of({ name: 'bulbasaur', types: [] })),
            getPokemonWithTranslations: jest.fn().mockReturnValue(
              of({
                name: 'bulbasaur',
                types: [
                  {
                    name: 'grass',
                    translations: [
                      { language: 'es', name: 'Planta' },
                      { language: 'ja', name: 'くさ' },
                    ],
                  },
                ],
              }),
            ),
          },
        },
      ],
    }).compile();

    controller = module.get<PokemonController>(PokemonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return the first 100 Pokémon', () => {
    controller.getAllPokemon().subscribe((data) => {
      expect(data).toEqual([{ name: 'bulbasaur', url: '...' }]);
    });
  });

  it('should return a specific Pokémon by ID', () => {
    controller.getPokemonById(1).subscribe((data) => {
      expect(data).toEqual({ name: 'bulbasaur', types: [] });
    });
  });

  it('should return a Pokémon with translations', () => {
    controller.getPokemonAndTypes(1).subscribe((data) => {
      expect(data).toEqual({
        name: 'bulbasaur',
        types: [
          {
            name: 'grass',
            translations: [
              { language: 'es', name: 'Planta' },
              { language: 'ja', name: 'くさ' },
            ],
          },
        ],
      });
    });
  });
});
