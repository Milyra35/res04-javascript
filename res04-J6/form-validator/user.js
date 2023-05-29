class User {
    #lastName;
    #firstName;
    #nickName;
    #email;
    #password;
    #confirmPassword;
    #biography;
    
    constructor (lastName, firstName, nickName, email, password, confirmPassword, biography = null) 
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
            console.log(true);
        }
        else 
        {
            console.log(false);
        }
    }
    
    validateLastName()
    {
        
    }
    
    validateNickName(nameList) 
    {
        
    }
    
    validateEmail() 
    {
        
    }
    
    validatePassword()
    {
        
    }
    
    validateBiography() 
    {
        
    }
    
    validate()
    {
        return (
            this.validateFirstName(this.firstName) &&
            this.validateLastName(this.lastName)
            );
    }
}

export {User};