import React from "react";
import { StyleSheet } from "react-native";

// Paleta Imp
// Ocean Deep Blue:  #5D769B
// Warm Sandy Beige: #C8B39B
// Ivory Breeze:     #FBEFE5

const estilosProdutos = StyleSheet.create({
	corFundo: {
		backgroundColor: "#FBEFE5", // Ivory Breeze
		paddingBottom: 50,
		paddingTop: 0,
		flex: 1,
	},

	// ── Header ──────────────────────────────────────────────────
	header: {
		backgroundColor: "#5D769B",
		paddingTop: 52,
		paddingBottom: 18,
		paddingHorizontal: 20,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	titulo: {
		fontFamily: "Old 3",
		fontSize: 26,
		color: "#FBEFE5",
		letterSpacing: 3,
		textAlign: "center",
		width: "100%",
	},
	subtitulo: {
		fontFamily: "Old 2",
		fontSize: 12,
		color: "#C8B39B",
		letterSpacing: 2,
		marginTop: 2,
	},

	// ── Card ────────────────────────────────────────────────────
	cardWrapper: {
		width: "90%",
		alignSelf: "center",
		marginVertical: 8,
	},
	card: {
		borderWidth: 1,
		borderColor: "#C8B39B",
		backgroundColor: "#fff",
	},
	nomeProdutoCard: {
		fontFamily: "Old 3",
		fontSize: 18,
		color: "#5D769B",
		paddingBottom: 4,
	},
	descProdutoCard: {
		fontFamily: "Old",
		fontSize: 14,
		color: "#C8B39B",
		paddingBottom: 4,
	},
	preco: {
		fontFamily: "Old 3",
		fontSize: 16,
		color: "#5D769B",
		paddingTop: 4,
	},

	// ── Botões do Card ──────────────────────────────────────────
	botao: {
		backgroundColor: "#5D769B",
		borderWidth: 1,
		borderColor: "#FBEFE5",
		borderRadius: 4,
		paddingVertical: 4,
		paddingHorizontal: 14,
	},
	textoBotao: {
		fontFamily: "Old",
		fontSize: 16,
		color: "#FBEFE5",
		textAlign: "center",
	},
	botaoFav: {
		borderWidth: 1,
		borderColor: "#5D769B",
		borderRadius: 4,
		paddingVertical: 4,
		paddingHorizontal: 10,
		marginRight: 8,
		backgroundColor: "#FBEFE5",
	},

	// ── Modal ───────────────────────────────────────────────────
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(93,118,155,0.45)",
	},
	modal: {
		backgroundColor: "#FBEFE5",
		width: "85%",
		borderWidth: 3,
		borderColor: "#5D769B",
		borderRadius: 16,
		paddingHorizontal: 16,
		paddingVertical: 16,
	},
	nomeProduto: {
		fontFamily: "Old 3",
		color: "#5D769B",
		fontSize: 22,
		paddingBottom: 5,
	},
	descProduto: {
		fontFamily: "Old",
		color: "#C8B39B",
		fontSize: 15,
		paddingBottom: 8,
	},
	precoModal: {
		fontFamily: "Old 3",
		color: "#5D769B",
		fontSize: 20,
		paddingBottom: 10,
	},
	imagemModal: {
		width: "90%",
		height: 220,
		borderRadius: 12,
		alignSelf: "center",
		marginVertical: 10,
	},
	botaoModal: {
		alignSelf: "flex-end",
		paddingBottom: 6,
	},

	// ── Imagens extras ──────────────────────────────────────────
	imagem: {
		width: "95%",
		alignSelf: "center",
	},

	imagemSlider: {
		height: "100%",
		alignSelf: "center",
	},

	// ── Misc ────────────────────────────────────────────────────
	container: {
		flex: 1,
	},
	page: {
		justifyContent: "center",
		alignItems: "center",
	},
});

export default estilosProdutos;
