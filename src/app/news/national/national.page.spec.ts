import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NationalPage } from './national.page';

describe('NationalPage', () => {
  let component: NationalPage;
  let fixture: ComponentFixture<NationalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
