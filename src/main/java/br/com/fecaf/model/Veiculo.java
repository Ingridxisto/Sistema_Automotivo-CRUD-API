package br.com.fecaf.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "veiculos")
public class Veiculo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String marca;
    private String modelo;
    private int ano_fabricacao;
    private String cor;
    private double preco;
    private long quilometragem;

    @Enumerated(EnumType.STRING)
    private Status_disponibilidade status_disponibilidade;

    private String foto;

    @CreationTimestamp
    private LocalDateTime adicionado;

    @UpdateTimestamp
    private LocalDateTime atualizado;

    // Enum para status de disponibilidade
    public enum Status_disponibilidade {
        DISPONIVEL,
        INDISPONIVEL,
        VENDIDO
    }

    // Construtor padrão
    public Veiculo() {
    }

    // Construtor completo
    public Veiculo(String marca, String modelo, int ano_fabricacao, String cor, double preco, long quilometragem, Status_disponibilidade status_disponibilidade, String foto) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano_fabricacao = ano_fabricacao;
        this.cor = cor;
        this.preco = preco;
        this.quilometragem = quilometragem;
        this.status_disponibilidade = status_disponibilidade;
        this.foto = foto;
    }

    // Getters e Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public int getAno_fabricacao() {
        return ano_fabricacao;
    }

    public void setAno_fabricacao(int ano_fabricacao) {
        this.ano_fabricacao = ano_fabricacao;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public long getQuilometragem() {
        return quilometragem;
    }

    public void setQuilometragem(long quilometragem) {
        this.quilometragem = quilometragem;
    }

    public Status_disponibilidade getStatus_disponibilidade() {
        return status_disponibilidade;
    }

    public void setStatus_disponibilidade(Status_disponibilidade status_disponibilidade) {
        this.status_disponibilidade = status_disponibilidade;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public LocalDateTime getAdicionado() {
        return adicionado;
    }

    public LocalDateTime getAtualizado() {
        return atualizado;
    }

    @Override
    public String toString() {
        return "Veiculo{" +
                "id=" + id +
                ", marca='" + marca + '\'' +
                ", modelo='" + modelo + '\'' +
                ", ano_fabricacao=" + ano_fabricacao +
                ", cor='" + cor + '\'' +
                ", preco=" + preco +
                ", quilometragem=" + quilometragem +
                ", status_disponibilidade=" + status_disponibilidade +
                ", foto='" + foto + '\'' +
                ", adicionado=" + adicionado +
                ", atualizado=" + atualizado +
                '}';
    }
}
