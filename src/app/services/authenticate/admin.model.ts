
// admin model
export class AdminInformation {
    constructor(
        public firstName: string,
        public middleName: string,
        public lastName: string,
        public sex: string,
        public contactNo: number,
        public birthDate: any,
          
        public houseNo: number,
        public street: string,
        public barangay: string,
          
        public email: string,

        public adminId: string,
        public imgUrl: string,
        public imgId: string
    ) { }
}