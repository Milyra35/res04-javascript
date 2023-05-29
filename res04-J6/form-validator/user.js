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
    
    validateFirstName() 
    {
        if (this.firstName.length >= 2 && this.firstName.length <= 64)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    
    validateLastName()
    {
        if (this.lastName.length >= 2 && this.lastName.length <= 64)
        {
            return true;
        }
        else 
        {
            return false;
        }
    }
    
    validateNickName(nameList) 
    {
        
        if (nameList.includes(this.nickName)) 
        {
            console.log("Ce pseudo existe déjà");
            return false;
        }
        else 
        {
            return true;
        }
    }
    
    validateEmail() 
    {
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailPattern.test(this.email)) 
        {
            return true;
        }
        else 
        {
            console.log("L'adresse email n'est pas valide");
            return false;
        }
    }
    
    validatePassword()
    {
        let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{12,}$/;
        
        if (this.password === this.confirmPassword &&
            passwordPattern.test(this.password))
        {
            return true;
        }
        else 
        {
            console.log("Le mot de passe doit contenir 1 majuscule, un nombre, un caractère spécial et au moins 12 caractères");
            return false;
        }
    }
    
    validateBiography() 
    {
        if (this.biography.length >= 128 
            && this.biography.length <= 512 
            && this.biography !== null)
        {
            return true;
        }
        else
        {
            console.log("Pas assez long, minimum 128 caractères");
            return false;
        }
    }
    
    addError(error)
    {
        
    }
    
    resetErrors()
    {
        
    }
    
    validate()
    {
        let nameList = ["nickname1", "Superman", "Mario"];
        return (
            this.resetErrors() &&
            this.validateFirstName() &&
            this.validateLastName() &&
            this.validateNickName(nameList) &&
            this.validateEmail() &&
            this.validatePassword() &&
            this.validateBiography()
            );
    }
}

export {User};