import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PlanoService } from './plano.service';
import { Plano } from 'src/app/Plano';

describe('PlanoService', async () => {
  let service: PlanoService;
  let plano: Plano;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PlanoService],
    });
    service = TestBed.inject(PlanoService);
  });

  it('Deve retornar Total', waitForAsync(async() => {

      let planoEsperado: Plano = {
        id: 3,
        valor: 144,
        nome: 'Total',
      };

      service.getById(3).subscribe((retornado) => {
        plano = retornado;
        expect(plano.nome).toEqual(planoEsperado.nome);
        expect(Number(plano.id.toString())).toEqual(planoEsperado.id);
        expect(Number(plano.valor.toString())).toEqual(planoEsperado.valor);
      });

    }));

});
