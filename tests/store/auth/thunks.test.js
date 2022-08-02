import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { chekingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixures/authFixures";


jest.mock('../../../src/firebase/providers');

describe('Pruerbas en Auth/Thunks', () => {

    const dispatch = jest.fn();
    beforeEach(() => jest.clearAllMocks() )

    test('debe de invocar el checkingCredentials', async() => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith( chekingCredentials() )
        
    });

    test('startGoogleSignIn debe de llamar el checkingCredentials y login', async() => {

        const loginData = { ok: true,  ...demoUser};
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    })

    test('startGoogleSignIn debe de llamar el checkingCredentials y logout - Error', async() => {

        const loginData = { ok: false,  errorMessage: 'Un error en google' };
        await signInWithGoogle.mockResolvedValue( loginData );

        await startGoogleSignIn()(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );

    })

    test('startLoginWithEmailPassword debe de llamar checkingCredencials y login', async() => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue( loginData );

        await startLoginWithEmailPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });

    test('startLoginWithEmailPassword debe de llamar checkingCredencials y logout', async() => {

        const loginData = { ok: false, errorMessage: 'Error de autenticacion' };
        const formData = { email: demoUser.email, password: '123456' };

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( logout( loginData ) );

    });

    test('startLogout debe de llamar logoutFirebase, claerNotes y logout', async() => {

        await startLogout()(dispatch); 

        expect( logoutFirebase ).toHaveBeenCalled()
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
        expect( dispatch ).toHaveBeenCalledWith( logout() )

    });

    test('startCreatingUserWithEmailPassword debe de llamar checkingCredencials y login', async() => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName };

        await registerUserWithEmailPassword.mockResolvedValue( loginData );

        await startCreatingUserWithEmailPassword(formData)(dispatch);

        expect( dispatch ).toHaveBeenCalledWith( chekingCredentials() );
        expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );

    });

});