import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewSciencePage } from './view-science.page';

describe('ViewSciencePage', () => {
  let component: ViewSciencePage;
  let fixture: ComponentFixture<ViewSciencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSciencePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewSciencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
