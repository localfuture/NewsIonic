import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewHealthPage } from './view-health.page';

describe('ViewHealthPage', () => {
  let component: ViewHealthPage;
  let fixture: ComponentFixture<ViewHealthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHealthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
