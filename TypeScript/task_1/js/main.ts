interface Teacher {
    readonly firstName: string //can only be set during init
    readonly lastName: string //can only be set during init
    fullTimeEmployee: boolean
    yearsOfExperience?: number //optional
    location: string
    [key: string]: any; //any attribute
}
