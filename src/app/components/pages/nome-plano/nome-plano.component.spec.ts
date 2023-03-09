import {
  ComponentFixture,
  TestBed,
  waitForAsync
} from '@angular/core/testing';

import { NomePlanoComponent } from './nome-plano.component';
import { PlanoService } from 'src/app/service/plano.service';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { LoginComponent } from '../login/login.component';

describe('NomePlanoComponent', () => {
  let component: NomePlanoComponent;
  let fixture: ComponentFixture<NomePlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        NomePlanoComponent
      ],
      imports: [BrowserModule, HttpClientModule, FormsModule],
        providers: [{ provide : PlanoService }]
    }).compileComponents();

    fixture = TestBed.createComponent(NomePlanoComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('Deve retornar Total', waitForAsync(() => {
    const html = fixture.debugElement;
    const entrada = html.query(By.css('#entrada'));
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    expect(entrada).toBeTruthy();

  
    entrada.triggerEventHandler('input', {target : {value : 3}});

    fixture.whenStable().then(async () => {

    expect(html.query(By.css('#nome-plano'))).not.toBeTruthy();

    const botao = html.query(By.css('button'));

    botao.triggerEventHandler('click', null);
    
    await sleep(2000);
    
    fixture.detectChanges();
    
    expect(html.query(By.css('#nome-plano'))).toBeTruthy();

    const nomePlano = html.query(By.css('#nome-plano')).nativeElement as HTMLElement;
    expect(nomePlano).toBeTruthy();
    expect(nomePlano.innerText).toContain('Total');
    });
  }));
});