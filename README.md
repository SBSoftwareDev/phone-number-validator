# Phone Number Validator

This program takes a string, and verifies a matching pattern against a proper phone number format. A proper match returns true. There's not too much to say about this particular method, I would classify it as an input handler.

## My Implementation

Oh my goodness, I had ***fun*** with this one. This regular expression is able to confirm the following formats (for U.S. based area codes):

        1 555 555 5555
        1 555-555-5555
        1 (555) 555-5555
        1(555)555-5555
        (555)555-5555
        (555) 555-5555
        555-555-5555
        555 555 5555
        5555555555

Only an area code of '1' is allowed, and only parentheses on the first three numbers. The area code and parentheses are optional of course. When first tackling this problem, I grouped the similar formats together. Starting with one set, I got a Regular Expression working and upgraded the RegEx one 'group' at a time. I actually think doing that helped me find the solution quicker than brute force.

## Want to try it out?
Here are three ways to run my program, in order of complexity:

1) Use my website! [Click here](https://www.DeveloperSean.com) to see what it's all about!

2) Use an online JavaScript compiler.
    - Copy and paste my code into [Programiz](https://www.programiz.com/javascript/online-compiler/) and give it the beans!

3) Download the project yourself and build upon it! 

---

### Option 3: Advanced Users Only
Want to take a deeper dive into the Matrix? Here's how you can get set up with customizing 
this program and see what sort of mistakes you can make (it's all apart of the process!)  

**You'll Need:**

* [**Visual Studio Code**](https://code.visualstudio.com/) (*An environment to write your own programs! It's free!*)

* [**Node.JS**](https://nodejs.org/en) (*So you can execute JavaScript code on your machine, rather than through a web browser! Also free!*)

After installing the above programs, make a new folder in any directory for this project.  

Download *main.js* into the new project folder, and open the file in VS Code.  

In VS, open the integrated terminal with Ctrl+`, or open through the 'View' tab. **Alternatively, you can open your local command line (CMD on Windows).**  
- *In EITHER terminal, be sure you are working in the directory of 'main.js'*  

Entering the following command will run the program. Huzzah!

```
node main.js
```

Thanks for reading, and good luck out there!
---
> See any issues? [Let me know!](https://www.DeveloperSean.com)