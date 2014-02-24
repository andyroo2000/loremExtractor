# What is this?

This is a quick one-off app I made, because I'm working on a Lorem Ipsum generator, but I wanted to be able to convert the text of any book (in plaintext format) to a sanitized array of words, free of digits, punctuation, or empty array values.

# How does this work?

As this was just a utility for my personal use, I just have it set up so that you drop a file called *input.txt* into a folder called *input* and run the program, which will spit out a .json file in the *output* folder.

# Is there anything cool about this?

Yes. It started out at around 80 lines of code, but I gradually whittled it down by using a few regular expressions and switching over to using [streams](https://github.com/substack/stream-handbook). Seriously people... streams.
