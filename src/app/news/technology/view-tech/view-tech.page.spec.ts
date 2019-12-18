import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewTechPage } from './view-tech.page';

describe('ViewTechPage', () => {
  let component: ViewTechPage;
  let fixture: ComponentFixture<ViewTechPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTechPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTechPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
