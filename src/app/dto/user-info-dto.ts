export class UserInfoDTO {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public apellidos: string = '',
        public rol: string = '',
        public email: string = '',
        public materia: number = 0,
        public semestre: number = 0,
    ){}
}
