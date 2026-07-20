---
title: "AI Abliteration Series | 1. Introduction and Abliterating Models"
titleAr: ""
description: "Practical article on running abliterated LLM models. Article 1"
descriptionAr: ""
pubDatetime: 2026-07-07T00:00:00.000Z
author: Yousef Altaher
modDatetime: 2026-07-07T00:51:00.000Z
tags: 
  - ai-abliteration
  - engineering
  - research
slug: ai-abliteration-series-1
---



<div class="lang-block lang-en">


## 🧪 AI Abliteration · Part 1

### 🚀 Introduction

**Abliterated models** are large language models modified to minimize — to the point of full removal — their refusal rate when asked questions that go against their "safety guidelines." Abliteration is one of a family of methods that aim to maximize the value of open-source models by removing any type of censorship, often referred to as safety guidelines, from such models. The process also allows a thorough examination of how LLMs work under the hood. Abliteration can be applied to any available model, without constraints or re-training.


### 🔧 How it works

Despite the description, abliterating a model is quite easy and simple. First, a list of prompts designed to trigger the safety response is generated and fed to the selected model. During the activation of the neural network, the tool monitors the parts of the network responsible for triggering the refusal response and down-regulates them, making them fire less and effectively bypassing them. It is almost a surgical operation targeted at a specific set of neurons.


### 🖥️ Demo

We are going to use [p-e-w/heretic](https://github.com/p-e-w/heretic) to abliterate `Qwen3.5-0.8B`.

First, install Heretic (preferably inside a virtual environment):

```bash
pip install -U heretic-llm
```

Make sure all requirements are installed, especially `torch` and `torchvision`.

Then run it against any model:

```bash
heretic Qwen/Qwen3.5-0.8B
```

This runs Heretic with the default prompt lists.

<figure class="post-figure">
<img src="/assets/abliteration_series/1/loading.png" alt="Heretic abliterating a model" />
<figcaption>Heretic processing the default prompt lists while abliterating the model.</figcaption>
</figure>

Once processing is done, we get the following screen:

<figure class="post-figure">
<img src="/assets/abliteration_series/1/trials.png" alt="Heretic abliteration trial results" />
<figcaption>Trial results — each run reports its refusal rate and KL divergence.</figcaption>
</figure>

The abliteration is done. From here we have various options to fine-tune the results. Heretic runs multiple trials, and each one reports a **refusal rate** and a **KL divergence**. The refusal rate indicates how many questions the model still refused, while the KL divergence indicates the difference between the abliterated model's and the original model's answers on the "good" prompts — essentially the drop in intelligence that resulted from the operation, i.e. how much the surgery affected neutral neurons and changed the model's behavior. After choosing a trial, you can save the resulting model.

From here you can push it to Hugging Face — but below we cover how to convert it for use in Ollama instead.


### <span class="section-thumb"><img src="/assets/logos/ollama.svg" alt="Ollama" /></span> Convert for Use in Ollama

<div class="callout callout-warning">
<p><strong>Important:</strong> Due to differences in dependencies, it is necessary to use a separate virtual environment for the Ollama conversion step.</p>
</div>

For this, we need another tool to streamline the process — [`llama.cpp`](https://github.com/ggerganov/llama.cpp):

```bash
git clone https://github.com/ggerganov/llama.cpp.git
```

To align the Qwen model with the tool, open `./model/config.json` and set:

- `mtp_num_hidden_layers` → `0`
- `num_nextn_predict_layers` → `1`
- `num_hidden_layers` → `24`

Then convert the model to GGUF:

```bash
python llama.cpp/convert_hf_to_gguf.py /path/to/model --outfile /path/to/result.gguf
```

Create a `Modelfile` with the following content:

```dockerfile
FROM ./model.gguf
```

Then build and run it in Ollama:

```bash
ollama create my-model -f Modelfile
ollama run my-model
```

And now we can interact with the uncensored model in Ollama.


### 📊 Additional

Installing Heretic's research tools lets us gather further data on the abliteration itself:

```bash
pip install -U heretic-llm[research]
```

Running the previous command with `--plot-residuals` generates a layer-by-layer visualization with a GIF animation illustrating the process.

<figure class="post-figure">
<img src="/assets/abliteration_series/1/animation.gif" alt="Layer-by-layer residual projection animation" />
<figcaption>Layer-by-layer residual projection across the network during abliteration.</figcaption>
</figure>

</div>
