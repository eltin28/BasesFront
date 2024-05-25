export class RegistroUsuarioDTO {
    constructor(
    public nombre: string = '',
    public apellidos: string = '',
    public rol: string = '',
    public email: string = '',
    public password: string = '',
    public confirmaPassword: string = ''
    ) { }
}