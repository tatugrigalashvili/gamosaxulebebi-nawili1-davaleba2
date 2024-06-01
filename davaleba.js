var pattern = /[0-9]/;

var str = "hello world 5678";

const result = pattern.test(str);

if (result == true) {
    document.write("რიცხვი მითითებულია")
}