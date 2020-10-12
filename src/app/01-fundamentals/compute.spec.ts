import { compute } from './compute';

describe('compute', () => {
    it('shpuld return 0 when input is negative', () => {
        const result = compute(-1);
        expect(result).toBe(0);
    });

});
