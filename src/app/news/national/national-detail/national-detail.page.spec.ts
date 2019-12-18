import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NationalDetailPage } from './national-detail.page';

describe('NationalDetailPage', () => {
  let component: NationalDetailPage;
  let fixture: ComponentFixture<NationalDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
