import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSportsPage } from './view-sports.page';

describe('ViewSportsPage', () => {
  let component: ViewSportsPage;
  let fixture: ComponentFixture<ViewSportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
