import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchFlightPage } from './search-flight.page';

describe('SearchFlightPage', () => {
  let component: SearchFlightPage;
  let fixture: ComponentFixture<SearchFlightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFlightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
