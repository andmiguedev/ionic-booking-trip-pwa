import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SidedrawerPage } from './sidedrawer.page';

describe('SidedrawerPage', () => {
  let component: SidedrawerPage;
  let fixture: ComponentFixture<SidedrawerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidedrawerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SidedrawerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
