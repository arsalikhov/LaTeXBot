import sys
import requests
import pyperclip as pc
x = "Data to be copied to clipboard"
pc.copy(x)
a = pc.paste()
print(a)


