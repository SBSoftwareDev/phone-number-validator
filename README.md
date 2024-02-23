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

The only magic here is the wizardy that takes this mess of symbols and parses it effectively. I use 2 capture groups in this Regular Expression. Here is the breakdown:

        /^(1?|1 ?)                  --> A capture group that optionally matches a '1' OR a '1' followed a single whitespace, at the beginning of the string.

        (\d{3}|[(]\d{3}[)](?!-))    --> Capture group that matches exactly 3 digits, OR matches an open round bracket, followed by exactly 3 digits, followed by a closing round bracket. If the brackets match, there is a negative lookahead disallowing a hypen after brackets. It just looks weird, doesn't it?

        [- ]?\d{3}[- ]?\d{4}$/ --> After the first section, we can optionally match a hypen OR space in the same spot. Then we check for exactly three more digits, and repeat the same but check for four digits at the END.

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