import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, EMPTY, throwError } from 'rxjs';

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



  it('should call the server to save changes when a new item is added', () => {
    let spy = spyOn(service, 'add').and.callFake(t => {
      return EMPTY;
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });



  it('should add the new todo returned from the server', () => {
    const todo = { id: 1 };
    spyOn(service, 'add').and.returnValue(from([todo]));

    component.add();

    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });


  it('should set the message property if server returns an error when adding with new todo', () => {
    const error = 'Error';
    spyOn(service, 'add').and.returnValue(throwError(error));

    component.add();

    expect(component.message).toBe(error);
  });


  it('should call the server if user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should not call the server if user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(EMPTY);

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });

});