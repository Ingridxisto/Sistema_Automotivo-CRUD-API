package br.com.fecaf.services;

import br.com.fecaf.model.Veiculo;
import br.com.fecaf.repository.VeiculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepository;

    // Metodo para listar todos os veículos
    public List<Veiculo> listarVeiculos() {
        return veiculoRepository.findAll();
    }

    // Metodo para salvar um novo veículo
    public Veiculo salvarVeiculo(Veiculo veiculo) {
        return veiculoRepository.save(veiculo);
    }

    // Metodo para atualizar um veículo existente
    public Veiculo atualizarVeiculo(Long id, Veiculo veiculo) {
        Optional<Veiculo> veiculoExistente = veiculoRepository.findById(id);

        if (veiculoExistente.isPresent()) {
            Veiculo veiculoAtualizado = veiculoExistente.get();
            veiculoAtualizado.setMarca(veiculo.getMarca());
            veiculoAtualizado.setModelo(veiculo.getModelo());
            veiculoAtualizado.setAno_fabricacao(veiculo.getAno_fabricacao());
            veiculoAtualizado.setCor(veiculo.getCor());
            veiculoAtualizado.setPreco(veiculo.getPreco());
            veiculoAtualizado.setQuilometragem(veiculo.getQuilometragem());
            veiculoAtualizado.setStatus_disponibilidade(veiculo.getStatus_disponibilidade());
            veiculoAtualizado.setFoto(veiculo.getFoto());
            return veiculoRepository.save(veiculoAtualizado); // Atualiza e retorna o veículo
        } else {
            return null; // Retorna null caso o veículo não seja encontrado
        }
    }

    // Metodo para excluir um veículo
    public void deletarVeiculo(Long id) {
        veiculoRepository.deleteById(id);
    }
}
