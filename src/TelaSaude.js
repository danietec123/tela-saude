import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
const TelaSaude = () => {
    // Variável de estado para controlar a visibilidade do seletor de data e hora
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // Variável de estado para armazenar a data selecionada
  const [selectedDate, setSelectedDate] = useState(null);

  // Função para lidar com a confirmação da seleção de data e hora
  const handleConfirm = (date) => {
    setSelectedDate(date); // Atualiza a data selecionada
    setDatePickerVisibility(false); // Fecha o seletor de data e hora
  };
  // primeiro dropdown / OU BOTAO SUSPENSO
  const [selectedItem1, setSelectedItem1] = useState(null);   // selectedItem guardar uma informação,  setSelectedItem colocar um valor dentro da variável 
  const [open1, setOpen1] = useState(false); // Controla se o primeiro BOTAO está aberto ou fechado,   //  não pode deixar apenas aberto

  //segundo dropdown / BOTAO 2 
  const [selectedItem2, setSelectedItem2] = useState(null); 
  const [open2, setOpen2] = useState(false); 

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.titulo}>Saúde</Text>

      {/* Ícone de adição para representar saúde */}
      <Icon name="plus" size={30} color="#000" style={styles.icone} />

      {/* Primeiro BOTAO SELECIONE */}
      <DropDownPicker /*seria o pacote */
     
        items={[
          { label: 'Vacina', value: 'vacina' },
          { label: 'Consulta', value: 'consulta' },
          { label: 'Medicamento', value: 'medicamento' },
          { label: 'Temperatura', value: 'temperatura' }
        ]}
        defaultValue={null}  /*ainda não foi selecionado nenhum item, por isso o null*/
        placeholder="Selecione" /*titulo do botao*/
        containerStyle={styles.dropdownContainer} /*estilo*/
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}  /*estilo do botao, cor de fundo ou borda*/
        open={open1}
        setOpen={setOpen1} //  atualizar o estado de abertura do botao
        value={selectedItem1}  // Valor selecionado no seletor
        setValue={setSelectedItem1} // Função para atualizar o valor selecionado, por exemplo vacina
      />

      {/* Segundo dropdown, PARA DUVIDA LER OS MESMO COMENTARIOS DO 1 BOTAO */}
      <DropDownPicker
        items={[
          { label: 'BCG - ID', value: 'BCG - ID' },
          { label: 'HEPATITE B 1', value: 'HEPATITE B 1' },
          { label: 'HEPATITE B', value: 'HEPATITE B' },
          { label: 'TETRAVALENTE (DTP + HIB)', value: 'TETRAVALENTE (DTP + HIB)' },
          { label: 'VOP (CONTRA PÓLIO)', value: 'VOP (CONTRA PÓLIO)' },
          { label: 'VORH (ROTAVÍRUS HUMANO)', value: 'VORH (ROTAVÍRUS HUMANO)' }
        ]}
        defaultValue={null}
        placeholder="Por favor, escolha"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        open={open2}
        setOpen={setOpen2}
        value={selectedItem2}
        setValue={setSelectedItem2}
      />
       {/* Botão para selecionar data e hora */}
       <Button title="Data e Hora"
        color='#90ee90'
         onPress={() => setDatePickerVisibility(true)} />
       
     {/* Modal de seleção de data e hora */}
     <DateTimePickerModal
        isVisible={isDatePickerVisible} /*visibilidade do modal DATA E HORA, */
        mode="datetime" /*seletor como data e hora*/
        onConfirm={handleConfirm} /*aqui quando eu selecionar a data e hora */
        onCancel={() => setDatePickerVisibility(false)} /*false para quando eu cancelar o botao*/
      />

      {/* Exibição da data selecionada */}
      {selectedDate && 
/*funcao para verificar se é verdadeiro ou false, verdadeiro vai aparecer a data e hora, executando a dat /hora*/
                <Text> {format(selectedDate, 'dd/MM, HH:mm')}</Text> 
/*formata como vai aparecer data/hora aqui faz parte tambem do pacote import { format } from 'date-fns';*/
            }

<View style={styles.buttonContainer}>

        <Button ADICIONAR
          title="Adicionar"
          color='#30cfa9'

          onPress={() => {
          }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Margem inferior do título
    marginTop: -500, // Margem superior do título, ajustada para alinhar com a borda superior
  },
  icone: {
    marginBottom: 20, // Margem inferior do ícone
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20, // Margem inferior do dropdown
  },
  dropdown: {
    backgroundColor: '#90ee90', // Cor de fundo do botão principal (Selecione)
    borderColor: '#ccc', // Cor da borda do dropdown
    borderWidth: 1, // Largura da borda do dropdown
    borderRadius: 5, 
  },
  dropdownItem: {
    justifyContent: 'flex-start', //  itens do BOTAO à esquerda
    paddingHorizontal: 10, // horizontal dos itens do BOTAO
  },
  dropdownMenu: {
    marginTop: 2, // 
  },
  /*ESTILO BOTAO ADICIONAR*/

  buttonContainer: {
    width: '80%', /*LARGURA*/
    marginBottom: -100,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#30cfa9',
  },
});

export default TelaSaude;
