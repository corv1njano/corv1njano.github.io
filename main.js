function copyText() {
    let input = document.getElementById("textInput");
    navigator.clipboard.writeText(input.value);
    alert("Copied Text!");
}

function toggleDiv() {
    let div = document.getElementById("help1");
    if (div.style.display == 'block') {
        div.style.display = 'none';
    } else {
        div.style.display = 'block';
    }
}

function decodeText() {
    let input = document.getElementById("textInput").value;
    let r1 = input.replaceAll('\\u0061', 'a')
    .replaceAll('\\u0062', 'b')
    .replaceAll('\\u0063', 'c')
    .replaceAll('\\u0064', 'd')
    .replaceAll('\\u0065', 'e')
    .replaceAll('\\u0066', 'f')
    .replaceAll('\\u0067', 'g')
    .replaceAll('\\u0068', 'h')
    .replaceAll('\\u0069', 'i')
    .replaceAll('\\u006A', 'j')
    .replaceAll('\\u006B', 'k')
    .replaceAll('\\u006C', 'l')
    .replaceAll('\\u006D', 'm')
    .replaceAll('\\u006E', 'n')
    .replaceAll('\\u006F', 'o')
    .replaceAll('\\u0070', 'p')
    .replaceAll('\\u0071', 'q')
    .replaceAll('\\u0072', 'r')
    .replaceAll('\\u0073', 's')
    .replaceAll('\\u0074', 't')
    .replaceAll('\\u0075', 'u')
    .replaceAll('\\u0076', 'v')
    .replaceAll('\\u0077', 'w')
    .replaceAll('\\u0078', 'x')
    .replaceAll('\\u0079', 'y')
    .replaceAll('\\u007A', 'z')
    //Capital letters
    .replaceAll('\\u0041', 'A')
    .replaceAll('\\u0042', 'B')
    .replaceAll('\\u0043', 'C')
    .replaceAll('\\u0044', 'D')
    .replaceAll('\\u0045', 'E')
    .replaceAll('\\u0046', 'F')
    .replaceAll('\\u0047', 'G')
    .replaceAll('\\u0048', 'H')
    .replaceAll('\\u0049', 'I')
    .replaceAll('\\u004A', 'J')
    .replaceAll('\\u004B', 'K')
    .replaceAll('\\u004C', 'L')
    .replaceAll('\\u004D', 'M')
    .replaceAll('\\u004E', 'N')
    .replaceAll('\\u004F', 'O')
    .replaceAll('\\u0050', 'P')
    .replaceAll('\\u0051', 'Q')
    .replaceAll('\\u0052', 'R')
    .replaceAll('\\u0053', 'S')
    .replaceAll('\\u0054', 'T')
    .replaceAll('\\u0055', 'U')
    .replaceAll('\\u0056', 'V')
    .replaceAll('\\u0057', 'W')
    .replaceAll('\\u0058', 'X')
    .replaceAll('\\u0059', 'Y')
    .replaceAll('\\u005A', 'Z')
    //Numbers
    .replaceAll('\\u0030', '0')
    .replaceAll('\\u0031', '1')
    .replaceAll('\\u0032', '2')
    .replaceAll('\\u0033', '3')
    .replaceAll('\\u0034', '4')
    .replaceAll('\\u0035', '5')
    .replaceAll('\\u0036', '6')
    .replaceAll('\\u0037', '7')
    .replaceAll('\\u0038', '8')
    .replaceAll('\\u0039', '9')
    //Other
    .replaceAll('\\u0020', ' ')
    .replaceAll('\\u0021', '!')
    .replaceAll('\\u0022', '\"')
    .replaceAll('\\u0023', '\#')
    .replaceAll('\\u0024', '$')
    .replaceAll('\\u0025', '%')
    .replaceAll('\\u0026', '&')
    .replaceAll('\\u0027', '\'')
    .replaceAll('\\u0028', '(')
    .replaceAll('\\u0029', ')')
    .replaceAll('\\u002A', '*')
    .replaceAll('\\u002B', '+')
    .replaceAll('\\u002C', ',')
    .replaceAll('\\u002D', '-')
    .replaceAll('\\u002E', '.')
    .replaceAll('\\u002F', '/')
    .replaceAll('\\u00A7', '§')
    .replaceAll('\\u005B', '[')
    .replaceAll('\\u005C', '\\')
    .replaceAll('\\u005D', ']')
    .replaceAll('\\u005E', '^')
    .replaceAll('\\u005F', '\_')
    .replaceAll('\\u0060', '`')
    //Emojis
    .replaceAll('\\u2B07', '⬇')
    document.getElementById("textInput").value = r1;
}