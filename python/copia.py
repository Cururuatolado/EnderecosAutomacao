
planilha = """  
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39
192.168.32.2/39""" #Adicione os endereços entre as aspas


planilha = planilha.strip().split('\n')


for i, endereco in enumerate(planilha):
    print(endereco, end=', ')

print()