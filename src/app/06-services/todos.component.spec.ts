import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable, from} from 'rxjs';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with items returned from the server', () => {
    spyOn(service, 'getTodos').and.callFake(() => {
      return from([[1, 2, 3]]);
    });

    component.ngOnInit();

    expect(component.todos.length).toBe(3);
  });
});