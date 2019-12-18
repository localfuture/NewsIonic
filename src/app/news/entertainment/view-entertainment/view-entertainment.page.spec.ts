import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewEntertainmentPage } from './view-entertainment.page';

describe('ViewEntertainmentPage', () => {
  let component: ViewEntertainmentPage;
  let fixture: ComponentFixture<ViewEntertainmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEntertainmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEntertainmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
