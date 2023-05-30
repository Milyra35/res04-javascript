class User {
    #lastName;
    #firstName;
    #nickName;
    #email;
    #password;
    #confirmPassword;
    #biography;
    #errors;

    constructor(lastName, firstName, nickName, email, password, confirmPassword, biography = null) {
        this.#lastName = lastName;
        this.#firstName = firstName;
        this.#nickName = nickName;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#biography = biography;
        this.#errors = [];
    }

    get lastName () {
        return this.#lastName;
    }

    set lastName (newName) {
        this.#lastName = newName;
    }

    get firstName () {
        return this.#firstName;
    }

    set firstName (newName) {
        this.#firstName = newName;
    }

    get nickName () {
        return this.#firstName;
    }

    set nickName (newName) {
        this.#firstName = newName;
    }

    get email () {
        return this.#email;
    }

    set email (newEmail) {
        this.#email = newEmail;
    }

    get password () {
        return this.#password;
    }

    set password (newPwd) {
        this.#password = newPwd;
    }

    get confirmPassword () {
        return this.#confirmPassword;
    }

    set confirmPassword (newPwd) {
        this.#confirmPassword = newPwd;
    }

    get biography () {
        return this.#biography;
    }

    set biography (newBio) {
        this.#biography = newBio;
    }

    get errors () {
        return this.#errors;
    }

    addError(error) {
        this.#errors.push(error);
    }

    resetErrors() {
        this.#errors = [];
    }

    checkMinMaxChars(min, max, str) {
        if(str.length >= min && str.length <= max)
            return true;
        else
            return false;
    }

    validateFirstName() {
        return this.checkMinMaxChars(2, 64, this.#firstName);
    }

    validateLastName() {
        return this.checkMinMaxChars(2, 64, this.#lastName);
    }

    validateNickName(nameList) {
        if(!this.checkMinMaxChars(2, 64, this.#nickName))
        {
            this.addError({
                field : "nickName",
                message : "Name have to be between 2 and 64 characters"
            });
            return false;
        }

        if(nameList.includes(this.#nickName))
        {
            this.addError({
                field : "nickName",
                message : "Nickname already exists"
            });
            return false;
        }


        return true;
    }

    validateEmail() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return regex.test(this.#email);
    }

    validatePassword() {
        if(this.#password !== this.#confirmPassword)
        {
            this.addError({
                field : "password",
                message : "Passwords do not match"
            });
            return false;
        }

        // (thanks Chat GPT)

        if (this.#password.length < 12)
            {
                this.addError({
                    field : "password",
                    message : "Wrong password format"
                });
                return false;
            }

        if (!/[A-Z]/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        if (!/\d/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(this.#password)) {
            this.addError({
                field : "password",
                message : "Wrong password format"
            });
            return false;
        }

        return true;
    }

    validateBiography() {
        return this.checkMinMaxChars(128, 512, this.#biography);
    }

    validate() {
        if(!this.validateFirstName())
        {
            this.addError({
                field : "firstName",
                message : "Name have to be between 2 and 64 characters"
            });
        }


        if(!this.validateLastName())
        {
            this.addError({
                field : "lastName",
                message : "Name have to be between 2 and 64 characters"
            });
        }

        this.validateNickName(["titi", "toto", "tutu", "tata"]);

        if(!this.validateEmail())
        {
            this.addError({
                field : "email",
                message : "Wrong email format"
            });
        }

        this.validatePassword();

        if(!this.validateBiography())
        {
            this.addError({
                field : "biography",
                message : "biography has to be between 128 and 512 characters"
            });
        }

        if(this.#errors.length > 0)
            return false;

        return true;
    }
}

export { User };