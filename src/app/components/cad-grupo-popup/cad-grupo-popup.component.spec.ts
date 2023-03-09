import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadGrupoPopupComponent } from './cad-grupo-popup.component';

describe('CadGrupoPopupComponent', () => {
  let component: CadGrupoPopupComponent;
  let fixture: ComponentFixture<CadGrupoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadGrupoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadGrupoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
