import { realizarLogin } from '../src/login.js';
import assert from 'node:assert';

describe('Testando a função realizar login', function () {

    it('Validar login com sucesso.', function () {

        const emailInformado = 'maria@gmail.com'
        const senhaInformado = '123@mudar';
        const retornaLoginSucesso = realizarLogin(emailInformado, senhaInformado);
        assert.equal(retornaLoginSucesso, 'Login realizado com sucesso.')
    });

    it('Validar credencial expirada.', function () {
        const senhaInformado = '456@rita';
        const emailInformado = 'rita@gmail.com'

        assert.throws(
            function () { realizarLogin(emailInformado, senhaInformado) },
            { message: 'A sua credencial expirou.' }
        );
    });

    it('Validar usuário não encontrado.', function () {
        const emailInformado = 'ritadecassia@gmal.com'
        const senhaInformado = '123@mudar';

        assert.throws(
            function () { realizarLogin(emailInformado, senhaInformado) },
            { message: 'As credenciais estão incorretas.' }
        );
    });

    it('Validar senha incorreta para o usuário encontrado.', function () {
        const emailInformado = 'joao@gmail.com'
        const senhaInformado = '123@mudarei!';

        assert.throws(
            function () { realizarLogin(emailInformado, senhaInformado) },
            { message: 'As credenciais estão incorretas.' }
        );
    });

});