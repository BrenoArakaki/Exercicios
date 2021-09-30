var i, j;
document.write("<table border>");
for (j = 1; j < 6; j++) {
  document.write("<td>")
  for (i = 1; i < 11; i++) {
    document.write(j + " x " + i + " = " + j * i + "<br>");
  }
  document.write("</td>")
}
document.write("</tr>")

for (j = 6; j < 11; j++) {
  document.write("<td>")
  for (i = 1; i < 11; i++) {
    document.write(j + " x " + i + " = " + j * i + "<br>");
  }
  document.write("</td>")
}
document.write("</tr>")

for (j = 11; j < 16; j++) {
  document.write("<td>")
  for (i = 1; i < 11; i++) {
    document.write(j + " x " + i + " = " + j * i + "<br>");
  }
  document.write("</td>")
}
document.write("</tr>")

for (j = 16; j < 21; j++) {
  document.write("<td>")
  for (i = 1; i < 11; i++) {
    document.write(j + " x " + i + " = " + j * i + "<br>");
  }
  document.write("</td>")
}
document.write("</tr>")


