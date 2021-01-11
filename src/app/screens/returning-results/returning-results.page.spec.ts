import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturningResultsPage } from './returning-results.page';

describe('ReturningResultsPage', () => {
  let component: ReturningResultsPage;
  let fixture: ComponentFixture<ReturningResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturningResultsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturningResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
