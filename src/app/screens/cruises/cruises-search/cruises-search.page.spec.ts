import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CruisesSearchPage } from './cruises-search.page';

describe('CruisesSearchPage', () => {
  let component: CruisesSearchPage;
  let fixture: ComponentFixture<CruisesSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruisesSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CruisesSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
