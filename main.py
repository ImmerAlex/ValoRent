import os
os.system("cls")

liste = os.listdir("C:/Users/Elève/Desktop/code/python/valoRent/public/images")
final = []
file = open("data.txt", "w")
file.write("[")

for directory in liste:
    content = os.listdir(
        f"C:/Users/Elève/Desktop/code/python/valoRent/public/images/{directory}")
    for elt in content:
        file.write("{" + f"type: '{directory}', image: '../public/images/{directory}/{elt}', price: '4,275'" + "},")
        final.append(
            {
                "type": directory,
                "image": f"../public/images/{directory}/{elt}",
                "price": 4_275
            }
        )

file.write("]")
file.close()
print(final)