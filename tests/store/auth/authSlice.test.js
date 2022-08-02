import { authSlice, chekingCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { authenticatedState, demoUser, initialState } from "../../fixures/authFixures";


describe('Pruebas en authSlice', () => {

    test('debe de mostrar el estado inicial y llamarse "auth" ', () => {
        
        const state = authSlice.reducer(  initialState, {})
        
        expect( state ).toEqual( initialState )
        expect( authSlice.name ).toBe('auth');



    })

    test('debe de realizar el cheking', () => {

        const state = authSlice.reducer( initialState, chekingCredentials() )
        expect( state.status ).toEqual('checking')
    })

    test('debe de realizar el login', () => {

        const state = authSlice.reducer( initialState, login( demoUser ) )
        expect( state ).toEqual({
            status: 'authenticated', //'checking', 'not-authenticated', 'authenticated'
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
    })
    

    test('debe de realizar el logout sin argumentos', () => {

        const state = authSlice.reducer( authenticatedState, logout() )
        expect( state ).toEqual({
            status: 'not-authenticated', //'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })
    })

    test('debe de realizar el logout con argumentos', () => {

        const errorMessage = 'Usuario no autenticado'
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage}) )
        expect( state ).toEqual({
            status: 'not-authenticated', //'checking', 'not-authenticated', 'authenticated'
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        })
    })

})