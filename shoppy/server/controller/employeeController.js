import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async(req, res) => {
    const result = await repository.getEmployeeAll(); //결과를 ()로받는다
    res.json(result);
    // res.send(result);
    res.end();
}