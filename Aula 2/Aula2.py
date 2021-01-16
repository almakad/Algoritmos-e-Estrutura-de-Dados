class PesoAltura:
    def __init__(self, peso, altura):
        self.peso = peso
        self.altura = altura


alturaMaxima = 1.8
pessoa1 = PesoAltura(70, 1.85)
if pessoa1.altura > alturaMaxima:
    print(f'Peso {pessoa1.peso} e Altura {pessoa1.altura}')

else:
    print(f'Peso {pessoa1.peso} e {pessoa1.altura}')
    