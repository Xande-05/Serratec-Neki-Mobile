import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { criarEvento } from '../services/api';

export default function NovoEventoScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');
  const [hora, setHora] = useState('');
  const [minuto, setMinuto] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [imagemUrl, setImagemUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const formatarData = () => {
    const diaFormatado = dia.padStart(2, '0');
    const mesFormatado = mes.padStart(2, '0');
    const horaFormatada = hora.padStart(2, '0');
    const minutoFormatado = minuto.padStart(2, '0');
    
    return `${ano}-${mesFormatado}-${diaFormatado}T${horaFormatada}:${minutoFormatado}:00`;
  };

  const handleSalvar = async () => {
    if (!nome || !dia || !mes || !ano || !hora || !minuto || !localizacao) {
      Alert.alert('Erro', 'Todos os campos obrigatórios devem ser preenchidos');
      return;
    }

    const diaNum = parseInt(dia);
    const mesNum = parseInt(mes);
    const anoNum = parseInt(ano);
    const horaNum = parseInt(hora);
    const minutoNum = parseInt(minuto);

    if (diaNum < 1 || diaNum > 31) {
      Alert.alert('Erro', 'Dia inválido (1-31)');
      return;
    }
    if (mesNum < 1 || mesNum > 12) {
      Alert.alert('Erro', 'Mês inválido (1-12)');
      return;
    }
    if (anoNum < 2025 || anoNum > 2100) {
      Alert.alert('Erro', 'Ano inválido');
      return;
    }
    if (horaNum < 0 || horaNum > 23) {
      Alert.alert('Erro', 'Hora inválida (0-23)');
      return;
    }
    if (minutoNum < 0 || minutoNum > 59) {
      Alert.alert('Erro', 'Minuto inválido (0-59)');
      return;
    }

    setLoading(true);
    try {
      const dataFormatada = formatarData();

      await criarEvento({
        nome,
        data: dataFormatada,
        localizacao,
        imagemUrl: imagemUrl || null,
      });

      Alert.alert('Sucesso', 'Evento criado com sucesso!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } catch (error) {
      Alert.alert('Erro', error.response?.data || 'Erro ao criar evento');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Novo Evento</Text>

        <Text style={styles.label}>Nome do Evento *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Show de Rock"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Data *</Text>
        <View style={styles.dateRow}>
          <View style={styles.dateInputContainer}>
            <Text style={styles.inputLabel}>Dia</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="15"
              keyboardType="numeric"
              maxLength={2}
              value={dia}
              onChangeText={setDia}
            />
          </View>
          
          <View style={styles.dateInputContainer}>
            <Text style={styles.inputLabel}>Mês</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="02"
              keyboardType="numeric"
              maxLength={2}
              value={mes}
              onChangeText={setMes}
            />
          </View>
          
          <View style={styles.dateInputContainer}>
            <Text style={styles.inputLabel}>Ano</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="2025"
              keyboardType="numeric"
              maxLength={4}
              value={ano}
              onChangeText={setAno}
            />
          </View>
        </View>

        <Text style={styles.label}>Horário *</Text>
        <View style={styles.timeRow}>
          <View style={styles.timeInputContainer}>
            <Text style={styles.inputLabel}>Hora</Text>
            <TextInput
              style={styles.timeInput}
              placeholder="20"
              keyboardType="numeric"
              maxLength={2}
              value={hora}
              onChangeText={setHora}
            />
          </View>
          
          <Text style={styles.timeSeparator}>:</Text>
          
          <View style={styles.timeInputContainer}>
            <Text style={styles.inputLabel}>Minuto</Text>
            <TextInput
              style={styles.timeInput}
              placeholder="00"
              keyboardType="numeric"
              maxLength={2}
              value={minuto}
              onChangeText={setMinuto}
            />
          </View>
        </View>

        <Text style={styles.label}>Localização *</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Rio de Janeiro"
          value={localizacao}
          onChangeText={setLocalizacao}
        />

        <Text style={styles.label}>URL da Imagem</Text>
        <TextInput
          style={styles.input}
          placeholder="https://exemplo.com/imagem.jpg"
          value={imagemUrl}
          onChangeText={setImagemUrl}
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.btnCancel}
            onPress={() => navigation.goBack()}
            disabled={loading}
          >
            <Text style={styles.btnCancelText}>Cancelar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSave}
            onPress={handleSalvar}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.btnSaveText}>Salvar</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    margin: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  input: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  dateRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  dateInputContainer: {
    flex: 1,
  },
  inputLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  dateInput: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  timeInputContainer: {
    flex: 1,
  },
  timeInput: {
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 20,
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  btnCancel: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  btnCancelText: {
    color: '#666',
    fontWeight: 'bold',
    fontSize: 16,
  },
  btnSave: {
    flex: 1,
    backgroundColor: '#0066CC',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
  },
  btnSaveText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});