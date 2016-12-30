# Better password UX
Passwords today are broken. They are complex, not fit for humans and most are not very secure. This project serves as a way to add some key and imho vital improvements to web password inputs which are today just plain broken if not insane.

#### To help the user enter a better password which is more secure and memorable it's recommended to

1. [Not mask the password](https://www.nngroup.com/articles/stop-password-masking/) by default
2. Only mask the password on blur (after they exit the field)
3. Or if the user is paranoid and explicitly wishes to mask it (A good UX principle is to never assume we know whats best for the user, they may have a valid reason for masking)
4. Only enter the password once. No confirm password input needed since the user can now read what they input
5. Display a live password strength indicator, that is ...
 * Helpful and clear to the user
 * [Realistically measures password strength](https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/) against modern and probable threats
 * Guides the user to entering a better password
6. Do **NOT** recommend to the user that they should use a combination of mixed upper case lowercase, numeric, or special characters
7. Do recommend to the user that they can enter a memorable set of words and spaces as their password. [How to choose a secure password](https://blog.agilebits.com/2011/06/21/toward-better-master-passwords/)

To help describe in practise some of these UX guidelines, I have come up with a small demo you can play with: 
[Demo](https://jsfiddle.net/jimmythegeek/6wsuj11u/)
