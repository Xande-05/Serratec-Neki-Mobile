import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function EventCard({ evento, onEdit, onDelete }) {
  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: evento.imagemUrl || 'https://via.placeholder.com/400x200?text=Sem+Imagem',
        }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {evento.nome}
        </Text>

        <View style={styles.info}>
          <Text style={styles.infoText}>📅 {formatarData(evento.data)}</Text>
          <Text style={styles.infoText}>📍 {evento.localizacao}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.btnEdit} onPress={onEdit}>
            <Text style={styles.btnEditText}>✏️ Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnDelete} onPress={onDelete}>
            <Text style={styles.btnDeleteText}>🗑️ Excluir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 12,
  },
  info: {
    marginBottom: 16,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  actions: {
    flexDirection: 'row',
    gap: 8,
  },
  btnEdit: {
    flex: 1,
    backgroundColor: '#0066CC',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  btnEditText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  btnDelete: {
    flex: 1,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#dc3545',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  btnDeleteText: {
    color: '#dc3545',
    fontWeight: 'bold',
    fontSize: 14,
  },
});