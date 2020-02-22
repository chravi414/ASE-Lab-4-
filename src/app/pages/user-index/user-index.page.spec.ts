import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserIndexPage } from './user-index.page';

describe('UserIndexPage', () => {
  let component: UserIndexPage;
  let fixture: ComponentFixture<UserIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserIndexPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
