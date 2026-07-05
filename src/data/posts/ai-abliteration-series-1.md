---
title: "AI Abliteration Series | 1. Introduction and Abliterating Models"
titleAr: ""
description: "Practical article on running abliterated LLM models. Article 1"
descriptionAr: ""
pubDatetime: 2026-07-7T00:00:00.000Z
author: Yousef Altaher
modDatetime: 2026-07-7T00:51:00.000Z
tags: 
  - AI
  - Practical
  - Workshop
  - Abliteration
  - Research
  - Infrastructure
  - Policy
slug: ai-abliteration-series-1
---



<div class="lang-block lang-en">


## 🚀 Introduction


**Abliterated models** are large language models that are modified to minimize, to the point of full removal, of their refusal rate when asked questions against their “safety guidelines”. Abliteration is one type of methods that aims to maximize the value of open source models, and remove any type of censorship, often refereed to as a safety guidelines, from such models. The process also allows a thorough examination of how LLMs work under the hood. Abliteration can be done on any available model, without constrains or re-training.


## 🔧 How it works

Despite the description, abliterating a model is quite easy and simple. First, a list containing prompts that aims to trigger the safety response is generated, and fed to the selected model. During the activation of the neural network, the tool monitor the parts of the neural network that is responsible for triggering the refusal response, and down regulate them, making them fire less, leading to them being bypassed. Almost a surgical operation that is targeted at a specific set of neural network.


## 🖥️ Demo

	Abliterate a model via Hertic
		We are going to use p-e-w/heretic [https://github.com/p-e-w/heretic] to abliterate qwen3.5:0.8b.

	First, we install (preferably in a venv) Hertic via 
		pip install -U heretic-llm

		Make sure to install all requirements, especially torch and torchvision

	Run
		heretic Qwen/Qwen3.5-0.8B (or any other model)

  This will run heretic with the default prompt lists

  <img src="/assets/abliteration_series/1/loading.png" alt="Abliterating" />


  After it is done processing, we get the following screen

  <img src="/assets/abliteration_series/1/trials.png" alt="Abliteration trials" />


  The abliteration is done. Now, we have various options to fine-tune the results. Heretic runs multiple trails, in which, each one has a refusal rate and KL divergence. The refusal rate indicate the number of questions the model refused, while KL  divergence indicate the difference between the abliterated model and the original model answers on the good prompts. Essentially, the drop in intelligence that resulted from the operation. How much did the abliteration surgery affected neutral neurons that changed the model behavior. After choosing a model, you can save it. 

  From here, you can run it on Hugging Face. But will include how to convert it to be used in OLLAMA


  
### <span class="section-thumb"><img src="/assets/logos/ollama.svg" alt="Ollama" /></span> Convert to be Used in OLLAMA

<div class="callout callout-warning">
<p><strong>Important:</strong> Due to differences in dependencies, it is necessary to have a different virtual environment for the OLLAMA conversion script.</p>
</div>

    For this, we need another tool to install to streamline the prorcess

    git clone https://github.com/ggerganov/llama.cpp.git 

  To align Qwen model with the tool, we need to open the following file ./model/config.json and change mtp_num_hidden_layers to 0, num_nextn_predict_layers to 1, and num_hidden_layers to 24

  Then

  python llama.cpp/convert_hf_to_gguf.py /path/to/model --outfile /path/to/results.gguf

  Then create a “Modelfile” with the content

    FROM ./model.gguf

  Then

  ollama create my-model -f Modelfile 
  ollama run my-model

  And now, we can interact with the uncensored model in ollama



## 📊 Additional

Installing heretic research tools allows us to get further data on the abliteration itself

pip install -U heretic-llm[research]

Running the previous command with –plot-residuals in heretic generates a layer by layer image with a gif animation to indicate the process.

  <img src="/assets/abliteration_series/1/animation.gif" alt="PaCMAP Projection" />




