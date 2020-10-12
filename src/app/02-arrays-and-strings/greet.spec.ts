import { greet } from "./greet";

describe('compute', () => { 
    it('should inclued hte name in the message', () =>{
        expect(greet('John')).toContain('John');
    });
});
