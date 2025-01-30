package br.com.fecaf.controller;

import br.com.fecaf.model.Veiculo;
import br.com.fecaf.services.VeiculoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/veiculos")
@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*")
public class VeiculoController {

    @Autowired
    private VeiculoService veiculoService;

    // Endpoint para listar veículos
    @GetMapping("/listarVeiculos")
    public ResponseEntity<List<Veiculo>> listarVeiculos() {
        List<Veiculo> veiculos = veiculoService.listarVeiculos();
        return ResponseEntity.ok(veiculos); // Retorna a lista de veículos com status 200 OK
    }

    // Endpoint para cadastrar um novo veículo
    @PostMapping("/cadastrarVeiculo")
    public ResponseEntity<Veiculo> salvarVeiculo(@RequestBody Veiculo veiculo) {
        Veiculo newVeiculo = veiculoService.salvarVeiculo(veiculo);
        return ResponseEntity.status(HttpStatus.CREATED).body(newVeiculo); // Retorna o veículo com status 201 Created
    }

    // Endpoint para atualizar um veículo
    @PutMapping("/atualizarVeiculo/{id}")
    public ResponseEntity<Veiculo> atualizarVeiculo(@PathVariable Long id, @RequestBody Veiculo veiculo) {
        Veiculo veiculoAtualizado = veiculoService.atualizarVeiculo(id, veiculo);

        if (veiculoAtualizado != null) {
            return ResponseEntity.ok(veiculoAtualizado); // Retorna o veículo atualizado com status 200 OK
        } else {
            return ResponseEntity.notFound().build(); // Retorna 404 caso o veículo não seja encontrado
        }
    }

    // Endpoint para deletar um veículo
    @DeleteMapping("/deletarVeiculo/{id}")
    public ResponseEntity<Void> deletarVeiculo(@PathVariable Long id) {
            veiculoService.deletarVeiculo(id);
            return ResponseEntity.status(HttpStatus.ACCEPTED).build(); // Retorna 202 Accepted
    }
}
