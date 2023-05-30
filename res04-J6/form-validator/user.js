class User {
    #lastName;
    #firstName;
    #nickName;
    #email;
    #password;
    #confirmPassword;
    #biography;
    #errors;
    
    constructor (lastName, firstName, nickName, email, password, confirmPassword, biography = null, errors = []) 
    {
        this.#lastName = lastName;
        this.#firstName = firstName;
        this.#nickName = nickName;
        this.#email = email;
        this.#password = password;
        this.#confirmPassword = confirmPassword;
        this.#biography = biography;
        this.#errors = errors;
    }
    
    get lastName() 
    {
        return this.#lastName;
    }
    set lastName(lastName) 
    {
        this.#lastName = lastName;
    }
    
    get firstName() 
    {
        return this.#firstName;
    }
    set firstName(firstName) 
    {
        this.#firstName = firstName;
    }
    
    get nickName() 
    {
        return this.#nickName;
    }
    set nickName(nickName) 
    {
        this.#nickName = nickName;
    }
    
    get email() 
    {
        return this.#email;
    }
    set email(email) 
    {
        this.#email = email;
    }
    
    get password() 
    {
        return this.#password;
    }
    set password(password) 
    {
        this.#password = password;
    }
    
    get confirmPassword() 
    {
        return this.#confirmPassword;
    }
    set confirmPassword(confirmPassword) 
    {
        this.#confirmPassword = confirmPassword;
    }
    
    get biography() 
    {
        return this.#biography;
    }
    set biography(biography) 
    {
        this.#biography = biography;
    }
    
    get errors()
    {
        return this.#errors;
    }
    set errors(errors)
    {
        this.#errors = errors;
    }
    
    validateFirstName() 
    {
        if (this.firstName.length >= 2 && this.firstName.length <= 64)
        {
            let errorFirstName = document.getElementById("errorFirstName");
            errorFirstName.innerHTML = "";
            return true;
        }
        else 
        {
            let errorFirstName = document.getElementById("errorFirstName");
            errorFirstName.innerHTML = "Le prénom doit avoir entre 2 et 64 caractères";
            this.addError("firstName", "Le prénom doit avoir entre 2 et 64 caractères");
            return false;
        }
    }
    
    validateLastName()
    {
        if (this.lastName.length >= 2 && this.lastName.length <= 64)
        {
            let errorLastName = document.getElementById("errorLastName");
            errorLastName.innerHTML = "";
            return true;
        }
        else 
        {
            let errorLastName = document.getElementById("errorLastName");
            errorLastName.innerHTML = "Le nom doit avoir entre 2 et 64 caractères";
            this.addError("lastName", "Le nom doit avoir entre 2 et 64 caractères");
            return false;
        }
    }
    
    validateNickName(nameList) 
    {
        
        if (nameList.includes(this.nickName)) 
        {
            let errorNickName = document.getElementById("errorNickName");
            errorNickName.innerHTML = "Ce pseudo existe déjà";
            this.addError("nickName", "Ce pseudo existe déjà");
            return false;
        }
        else if (this.nickName.length <= 2)
        {
            let errorNickName = document.getElementById("errorNickName");
            errorNickName.innerHTML = "Il faut au minimum 3 caractères";
            this.addError("nickName", "Il faut au minimum 3 caractères");
            return false;
        }
        else 
        {
            let errorNickName = document.getElementById("errorNickName");
            errorNickName.innerHTML = "";
            return true;
        }
    }
    
    validateEmail() 
    {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
        
        if (emailPattern.test(this.email)) 
        {
            let errorEmail = document.getElementById("errorEmail");
            errorEmail.innerHTML = "";
            return true;
        }
        else 
        {
            let errorEmail = document.getElementById("errorEmail");
            errorEmail.innerHTML = "Le mail n'est pas valide";
            this.addError("email", "Le mail n'est pas valide");
            return false;
        }
    }
    
    validatePassword()
    {
        let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{12,}$/;
        
        if (this.password === this.confirmPassword &&
            passwordPattern.test(this.password))
        {
            let errorPassword = document.getElementById("errorPassword");
            errorPassword.innerHTML = "";
            return true;
        }
        else 
        {
            let errorPassword = document.getElementById("errorPassword");
            errorPassword.innerHTML = "Le mot de passe doit contenir 1 majuscule, un nombre, un caractère spécial et au moins 12 caractères";
            this.addError("password", "Le mot de passe doit contenir 1 majuscule, un nombre, un caractère spécial et au moins 12 caractères");
            return false;
        }
    }
    
    validateBiography() 
    {
        if (this.biography.length >= 128 
            && this.biography.length <= 512 
            && this.biography !== null)
        {
            let errorBio = document.getElementById("errorBio");
            errorBio.innerHTML = "";
            return true;
        }
        else if (this.biography.length === 0) 
        {
            let errorBio = document.getElementById("errorBio");
            errorBio.innerHTML = "";
            return true;
        }
        else
        {
            let errorBio = document.getElementById("errorBio");
            errorBio.textContent = "Il faut minimum 128 caractères et maximum 512 caractères";
            this.addError("biography", "Il faut minimum 128 caractères et maximum 512 caractères");
            return false;
        }
    }
    
    addError(field, error)
    {
        this.errors.push({field, error});
    }
    
    resetErrors()
    {
        this.errors = [];
    }
    
    validate()
    {
        let nameList = ["nickname1", "Superman", "Mario"];
        
        this.resetErrors();

        let isValidFirstName = this.validateFirstName();
        let isValidLastName = this.validateLastName();
        let isValidNickName = this.validateNickName(nameList);
        let isValidEmail = this.validateEmail();
        let isValidPassword = this.validatePassword();
        let isValidBiography = this.validateBiography();
    
        return (
            isValidFirstName &&
            isValidLastName &&
            isValidNickName &&
            isValidEmail &&
            isValidPassword &&
            isValidBiography
        );
    }
}

export {User};